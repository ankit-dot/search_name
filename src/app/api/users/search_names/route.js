import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userName";
import { NextResponse } from 'next/server'


connect();

export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const serachTerm = searchParams.get("param");
    let names;
    if (!serachTerm) {
      names = await User.find({});
    } else {
      const searchRegex = new RegExp(serachTerm, "i");
      names = await User.find({ user_name: { $regex: searchRegex } });
    }
    return NextResponse.json(names);
  } catch (error) {
        return NextResponse.json({error: error.message})
  }
}
