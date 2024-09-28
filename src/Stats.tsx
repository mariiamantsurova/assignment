import { useAuth } from "@frontegg/react";
import "./styles/App.css";
import { PieChart } from "@mui/x-charts";
import { useEffect, useState } from "react";

interface StatsProps {
  completed: number;
  uncompleted: number;
}
interface UserEntity {
  id: number;
  name: string;
  profilePictureUrl: string;
}

function Stats({ completed, uncompleted }: StatsProps) {
  const { user } = useAuth();
  const [users, setUsers] = useState<UserEntity[]>([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "frontegg-tenant-id": user?.tenantId || "",
      authorization: `Bearer ${user?.accessToken || ""}`,
    },
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_API_URL
          }/identity/resources/users/v3?_includeSubTenants=true`,
          options
        );

        if (!response.ok) {
          throw new Error(`${response.status}`);
        }

        const result = await response.json();
        setUsers(result.items);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Failed to fetch users:", error.message);
          alert(error.message);
        } else {
          console.error("Unknown error", error);
        }
      }
    };

    if (user?.accessToken) {
      fetchUsers();
    }
  }, [user]);

  return (
    <div className="stats-card card">
      <div>
        <h2>Statistics:</h2>
        <PieChart
          colors={["#7209B7", "#E70092"]}
          series={[
            {
              data: [
                { id: 0, value: completed, label: "Completed" },
                { id: 1, value: uncompleted, label: "Uncompleted" },
              ],
            },
          ]}
          width={400}
          height={200}
          sx={{
            "& .MuiLegend-label": {
              color: "#FFFFFF", // Change legend text color to white
            },
            "& text": {
              fill: "white", // Change the color of the text inside the chart (including labels)
            },
          }}
        />
      </div>
      <div>
        <ul className="users_list">
          {users.map((userEntity) => (
            <li key={userEntity.id}>
              <img src={userEntity.profilePictureUrl} alt="profile image" />
              <span>{userEntity.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Stats;
