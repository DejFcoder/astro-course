export async function GET() {
  return new Response(JSON.stringify({msg: "Hello world"}), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export const POST = async ({params, request}) => {
    const body = await request.json();
    return new Response(JSON.stringify(body), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
