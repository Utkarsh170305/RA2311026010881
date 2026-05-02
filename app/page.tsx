"use client";

import { useEffect, useState } from "react";
import { Log } from "./utils/logger";

export default function Home() {
  const [data, setData] = useState<any[]>([]);

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ1czA2MDRAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwNDgxOSwiaWF0IjoxNzc3NzAzOTE5LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZGM1NmNlMDItY2VmOS00Njc4LThiYzItMWE4NjU3M2M5MDA5IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoidXRrYXJzaCBzaGFybWEiLCJzdWIiOiIxMDA2ZTQ5Ny05MGFmLTQ2YTAtYjNlNS0xNzhkZWQ0ZDAxYTkifSwiZW1haWwiOiJ1czA2MDRAc3JtaXN0LmVkdS5pbiIsIm5hbWUiOiJ1dGthcnNoIHNoYXJtYSIsInJvbGxObyI6InJhMjMxMTAyNjAxMDg4MSIsImFjY2Vzc0NvZGUiOiJRa2JweEgiLCJjbGllbnRJRCI6IjEwMDZlNDk3LTkwYWYtNDZhMC1iM2U1LTE3OGRlZDRkMDFhOSIsImNsaWVudFNlY3JldCI6InlERXhhaFlSQkFIRFREcFQifQ.rjT7IBtZzDqtOhp9RMWIvGY6uQ38MY1r6zPoDjlG-PE";

  useEffect(() => {
    async function fetchData() {
      try {
        Log("frontend", "info", "api", "Fetching notifications");
        const res = await fetch(
          "http://20.207.122.201/evaluation-service/notifications?limit=10",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("STATUS:", res.status);

        const json = await res.json();
        console.log("FULL RESPONSE:", json);

        setData(
          json.notifications ||
          json.data?.notifications ||
          json.data ||
           []);
        Log("frontend", "info", "api", "Fetch successful"); 
      } catch (err) {
        Log("frontend", "error", "api", "Fetch failed");
      }
    }

    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>All Notifications</h1>

      {data.length === 0 ? (
        <p>No data</p>
      ) : (
        data.map((n) => (
          <div key={n.ID}>
            <p>{n.Type} - {n.Message}</p>
          </div>
        ))
      )}
    </div>
  );
}