const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ1czA2MDRAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwNDgxOSwiaWF0IjoxNzc3NzAzOTE5LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZGM1NmNlMDItY2VmOS00Njc4LThiYzItMWE4NjU3M2M5MDA5IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoidXRrYXJzaCBzaGFybWEiLCJzdWIiOiIxMDA2ZTQ5Ny05MGFmLTQ2YTAtYjNlNS0xNzhkZWQ0ZDAxYTkifSwiZW1haWwiOiJ1czA2MDRAc3JtaXN0LmVkdS5pbiIsIm5hbWUiOiJ1dGthcnNoIHNoYXJtYSIsInJvbGxObyI6InJhMjMxMTAyNjAxMDg4MSIsImFjY2Vzc0NvZGUiOiJRa2JweEgiLCJjbGllbnRJRCI6IjEwMDZlNDk3LTkwYWYtNDZhMC1iM2U1LTE3OGRlZDRkMDFhOSIsImNsaWVudFNlY3JldCI6InlERXhhaFlSQkFIRFREcFQifQ.rjT7IBtZzDqtOhp9RMWIvGY6uQ38MY1r6zPoDjlG-PE";

async function getTopNotifications() {
  try {
    const res = await fetch(
      "http://20.207.122.201/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();

    const notifications = data.notifications || [];

    const weight = {
      Placement: 3,
      Result: 2,
      Event: 1,
    };

    const sorted = notifications.sort((a, b) => {
      const wDiff = weight[b.Type] - weight[a.Type];
      if (wDiff !== 0) return wDiff;

      return new Date(b.Timestamp) - new Date(a.Timestamp);
    });

    const top10 = sorted.slice(0, 10);

    console.log("TOP 10 NOTIFICATIONS:");
    console.log(top10);
  } catch (err) {
    console.log("Error:", err);
  }
}

getTopNotifications();