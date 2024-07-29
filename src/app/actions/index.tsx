"use server";

export async function useServerTest() {
  try {
    return { message: "Use Server" };
  } catch (err) {
    console.error(err);
  }
}
