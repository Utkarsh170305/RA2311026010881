export async function Log(
  stack: string,
  level: string,
  pkg: string,
  message: string
) {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ1czA2MDRAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwNDgxOSwiaWF0IjoxNzc3NzAzOTE5LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZGM1NmNlMDItY2VmOS00Njc4LThiYzItMWE4NjU3M2M5MDA5IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoidXRrYXJzaCBzaGFybWEiLCJzdWIiOiIxMDA2ZTQ5Ny05MGFmLTQ2YTAtYjNlNS0xNzhkZWQ0ZDAxYTkifSwiZW1haWwiOiJ1czA2MDRAc3JtaXN0LmVkdS5pbiIsIm5hbWUiOiJ1dGthcnNoIHNoYXJtYSIsInJvbGxObyI6InJhMjMxMTAyNjAxMDg4MSIsImFjY2Vzc0NvZGUiOiJRa2JweEgiLCJjbGllbnRJRCI6IjEwMDZlNDk3LTkwYWYtNDZhMC1iM2U1LTE3OGRlZDRkMDFhOSIsImNsaWVudFNlY3JldCI6InlERXhhaFlSQkFIRFREcFQifQ.rjT7IBtZzDqtOhp9RMWIvGY6uQ38MY1r6zPoDjlG-PE";

  try {
    await fetch("http://20.207.122.201/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        stack,
        level,
        package: pkg,
        message,
      }),
    });
  } catch (err) {
    console.log("Logging failed");
  }
}