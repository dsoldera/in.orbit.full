import { BACKEND_URL } from "../constants";

export async function createGoalCompletion(goalId: string) {
  await fetch(`${BACKEND_URL}/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      goalId,
    }),
  })
}