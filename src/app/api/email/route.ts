import { NextRequest, NextResponse } from "next/server";
import sendMail from "@/utils/email";

// @ description send client details to inbox
// @ route /api/email/resetpassword -POST

export async function POST(request: NextRequest) {
  try {
    const { email, number, name } = await request.json();

    if (!email || !name || !number)
      return NextResponse.json({ status: 401, message: "unauthorised" });

    // send link to email
    await sendMail({ email, number, name });
    return NextResponse.json({
      status: 200,
      message: "Details sent",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, message: "server error" });
  }
}
