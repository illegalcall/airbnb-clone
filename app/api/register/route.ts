import bcrypt from 'bcrypt';
import prisma from '@/app/libs/prismadb';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
	const body = await req.json();
	const { email, password, name } = body;
	const hashedPassword = await bcrypt.hash(password, 12);
	const user = await prisma.user.create({
		data: {
			email,
			hashedPassword,
			name,
		},
	});
	return NextResponse.json(user);
}
