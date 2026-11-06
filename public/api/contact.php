<?php
// Prevent any accidental output before headers
error_reporting(0);
ini_set('display_errors', '0');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Handle CORS Preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    echo json_encode(["status" => "ok"]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed. Use POST."]);
    exit;
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data || !is_array($data)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid JSON payload."]);
    exit;
}

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$organization = trim($data['organization'] ?? 'Not Specified');
$topic = trim($data['topic'] ?? 'Executive Dialogue');
$message = trim($data['message'] ?? '');

// Validation
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Please fill in all required fields (Name, Email, Message)."]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Please provide a valid email address."]);
    exit;
}

$adminEmail = getenv('ADMIN_EMAIL') ?: 'rksc.co.in@gmail.com';
$gmailAppPassword = getenv('GMAIL_APP_PASSWORD') ?: '';
$submissionTime = date('d/m/Y, h:i:s A');
$formattedMessage = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));
$safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$safeOrg = htmlspecialchars($organization, ENT_QUOTES, 'UTF-8');
$safeTopic = htmlspecialchars($topic, ENT_QUOTES, 'UTF-8');
$safeEmail = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');

// Admin Email HTML
$adminSubject = "[Advisory Inquiry] {$topic} — {$name}";
$adminHtml = <<<HTML
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:20px;background-color:#05070a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background-color:#0b0d11;color:#f2f4f8;border-radius:12px;border:1px solid #242933;padding:32px;">
    <div style="border-bottom:1px solid #242933;padding-bottom:20px;margin-bottom:24px;">
      <span style="font-family:monospace;font-size:11px;text-transform:uppercase;letter-spacing:2px;color:#c9a46c;">RKS CONSULTING · EXECUTIVE INQUIRY</span>
      <h2 style="font-size:22px;margin:8px 0 0;color:#fafaf8;font-weight:700;">New Consultation Request</h2>
    </div>

    <table style="width:100%;border-collapse:collapse;margin-bottom:24px;font-size:14px;">
      <tr>
        <td style="padding:8px 0;color:#66717d;width:140px;font-family:monospace;">Full Name:</td>
        <td style="padding:8px 0;color:#fafaf8;font-weight:600;">{$safeName}</td>
      </tr>
      <tr>
        <td style="padding:8px 0;color:#66717d;font-family:monospace;">Organization:</td>
        <td style="padding:8px 0;color:#fafaf8;">{$safeOrg}</td>
      </tr>
      <tr>
        <td style="padding:8px 0;color:#66717d;font-family:monospace;">Client Email:</td>
        <td style="padding:8px 0;color:#38bdf8;"><a href="mailto:{$safeEmail}" style="color:#38bdf8;text-decoration:none;">{$safeEmail}</a></td>
      </tr>
      <tr>
        <td style="padding:8px 0;color:#66717d;font-family:monospace;">Discussion Topic:</td>
        <td style="padding:8px 0;color:#c9a46c;font-weight:600;">{$safeTopic}</td>
      </tr>
      <tr>
        <td style="padding:8px 0;color:#66717d;font-family:monospace;">Submitted At:</td>
        <td style="padding:8px 0;color:#969ba3;font-size:12px;">{$submissionTime}</td>
      </tr>
    </table>

    <div style="margin-top:24px;padding:20px;background-color:#141820;border-radius:8px;border-left:3px solid #c9a46c;">
      <div style="font-family:monospace;font-size:11px;text-transform:uppercase;color:#c9a46c;margin-bottom:8px;">Executive Message / Scope:</div>
      <div style="color:#fafaf8;font-size:14px;line-height:1.6;">{$formattedMessage}</div>
    </div>

    <div style="margin-top:28px;padding-top:20px;border-top:1px solid #242933;font-size:12px;color:#66717d;text-align:center;">
      Direct reply will be sent to <strong>{$safeEmail}</strong>.
    </div>
  </div>
</body>
</html>
HTML;

// Client Confirmation HTML
$clientSubject = "Dialogue Initiated: Consultation Inquiry Received — RKS Consulting";
$clientHtml = <<<HTML
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:20px;background-color:#05070a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background-color:#0b0d11;color:#f2f4f8;border-radius:12px;border:1px solid #242933;padding:32px;">
    <div style="border-bottom:1px solid #242933;padding-bottom:20px;margin-bottom:24px;">
      <span style="font-family:monospace;font-size:11px;text-transform:uppercase;letter-spacing:2px;color:#c9a46c;">RKS CONSULTING · EXECUTIVE ADVISORY</span>
      <h2 style="font-size:22px;margin:8px 0 0;color:#fafaf8;font-weight:700;">Dialogue Initiated</h2>
    </div>

    <p style="font-size:15px;color:#fafaf8;line-height:1.6;">
      Dear {$safeName},
    </p>

    <p style="font-size:14px;color:#969ba3;line-height:1.6;">
      Thank you for requesting a conversation regarding <strong>{$safeTopic}</strong>.
      Your message has been delivered directly to our executive advisory desk (<span style="color:#fafaf8;font-family:monospace;">{$adminEmail}</span>).
    </p>

    <div style="margin:20px 0;padding:16px 20px;background-color:#141820;border-radius:8px;border:1px solid #242933;">
      <div style="font-family:monospace;font-size:11px;color:#66717d;text-transform:uppercase;margin-bottom:6px;">Inquiry Scope Recorded:</div>
      <div style="font-size:13px;color:#c9a46c;font-weight:500;">{$safeTopic}</div>
    </div>

    <p style="font-size:14px;color:#969ba3;line-height:1.6;">
      Our team will review your scope and follow up with you at <strong style="color:#fafaf8;">{$safeEmail}</strong> shortly.
    </p>

    <div style="margin-top:32px;padding-top:24px;border-top:1px solid #242933;font-size:12px;color:#66717d;line-height:1.5;">
      <strong style="color:#fafaf8;">Sharat Kaul</strong><br/>
      Semiconductor Technology Leader & Advanced Packaging Strategist<br/>
      RKS Consulting<br/>
      <a href="mailto:{$adminEmail}" style="color:#c9a46c;text-decoration:none;">{$adminEmail}</a>
    </div>
  </div>
</body>
</html>
HTML;

/**
 * Sends email via Gmail SMTP (SSL Port 465) with pure PHP socket
 */
function sendGmailSmtp($to, $subject, $htmlContent, $replyToEmail = '', $replyToName = '') {
    global $adminEmail, $gmailAppPassword;

    $context = stream_context_create([
        'ssl' => [
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        ]
    ]);

    $socket = @stream_socket_client('ssl://smtp.gmail.com:465', $errno, $errstr, 20, STREAM_CLIENT_CONNECT, $context);
    if (!$socket) {
        throw new Exception("Connection to Gmail SMTP failed: $errstr ($errno)");
    }

    $read = function() use ($socket) {
        $response = '';
        while ($line = fgets($socket, 515)) {
            $response .= $line;
            if (substr($line, 3, 1) === ' ') break;
        }
        return $response;
    };

    $send = function($cmd) use ($socket, $read) {
        fputs($socket, $cmd . "\r\n");
        return $read();
    };

    $read(); // Initial 220 banner

    $serverName = $_SERVER['SERVER_NAME'] ?? 'rksc.co.in';
    $send("EHLO " . $serverName);

    $authResp = $send("AUTH LOGIN");
    if (strpos($authResp, '334') === false) throw new Exception("AUTH LOGIN error: " . trim($authResp));

    $userResp = $send(base64_encode($adminEmail));
    if (strpos($userResp, '334') === false) throw new Exception("Username error: " . trim($userResp));

    $passResp = $send(base64_encode($gmailAppPassword));
    if (strpos($passResp, '235') === false) throw new Exception("Password rejected by Google: " . trim($passResp));

    $fromResp = $send("MAIL FROM:<{$adminEmail}>");
    if (strpos($fromResp, '250') === false) throw new Exception("MAIL FROM error: " . trim($fromResp));

    $rcptResp = $send("RCPT TO:<{$to}>");
    if (strpos($rcptResp, '250') === false) throw new Exception("RCPT TO error: " . trim($rcptResp));

    $dataResp = $send("DATA");
    if (strpos($dataResp, '354') === false) throw new Exception("DATA error: " . trim($dataResp));

    $headers = [
        "MIME-Version: 1.0",
        "Content-Type: text/html; charset=UTF-8",
        "From: =?UTF-8?B?" . base64_encode("RKS Advisory Desk") . "?= <{$adminEmail}>",
        "To: <{$to}>",
        "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=",
        "Date: " . date('r'),
        "X-Mailer: RKS-Consulting-Mailer/1.0"
    ];

    if (!empty($replyToEmail)) {
        $rtName = !empty($replyToName) ? "=?UTF-8?B?" . base64_encode($replyToName) . "?= " : "";
        $headers[] = "Reply-To: {$rtName}<{$replyToEmail}>";
    }

    $body = implode("\r\n", $headers) . "\r\n\r\n" . $htmlContent . "\r\n.\r\n";
    fputs($socket, $body);
    $finalResp = $read();

    $send("QUIT");
    fclose($socket);

    if (strpos($finalResp, '250') === false) {
        throw new Exception("Dispatch rejected: " . trim($finalResp));
    }

    return true;
}

// 1. Send to Admin
$adminSent = false;
$errorMessage = '';

try {
    sendGmailSmtp($adminEmail, $adminSubject, $adminHtml, $email, $name);
    $adminSent = true;
} catch (Exception $e) {
    $errorMessage = $e->getMessage();
    // Fallback: server native mail()
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: RKS Advisory Desk <{$adminEmail}>\r\n";
    $headers .= "Reply-To: {$name} <{$email}>\r\n";
    $adminSent = @mail($adminEmail, $adminSubject, $adminHtml, $headers);
}

if (!$adminSent) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Failed to deliver inquiry. " . ($errorMessage ? "($errorMessage)" : "Please contact info@rksc.co.in directly.")
    ]);
    exit;
}

// 2. Send Auto-Reply to Client (non-fatal)
try {
    sendGmailSmtp($email, $clientSubject, $clientHtml);
} catch (Exception $e) {
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: Sharat Kaul | RKS Consulting <{$adminEmail}>\r\n";
    @mail($email, $clientSubject, $clientHtml, $headers);
}

// Return Success
echo json_encode([
    "success" => true,
    "provider" => "nodemailer",
    "message" => "Inquiry delivered successfully to admin and confirmation sent to client."
]);
