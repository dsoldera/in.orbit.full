interface CreateGoalRequest {
  title: string
  desiredWeeklyFrequency: number
}

const backend_url = import.meta.env.VITE_BASE_URL;

export async function createGoal({
  title,
  desiredWeeklyFrequency,
}: CreateGoalRequest) {
  await fetch(`${backend_url}/goals`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      desiredWeeklyFrequency,
    }),
  })
}