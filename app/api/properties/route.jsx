import connectDB from "@/config/database";

export const GET = async (req) => {
  try {
    await connectDB();
    return new Response(JSON.stringify({ message: "OK" }), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};
