<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
header('Connection: keep-alive');

// Send a simple SSE event to the client
echo "data: Server time: " . date('H:i:s') . "\n\n";
flush();

sleep(5);

echo "data: Server next time: " . date('H:i:s') . "\n\n";
flush();
?>
