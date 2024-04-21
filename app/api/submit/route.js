import { google } from "googleapis"

export async function GET() {
    return new Response(
        JSON.stringify({message: "GET request working"}),
        { status: 200 }
    )
}

export async function POST(request) {
    const body = await request.json()

    try {
        const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.CLIENT_EMAIL,
            private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n')
        },
        scopes: [
            'https://www.googleapis.com/auth/drive',
            'https://www.googleapis.com/auth/drive.file',
            'https://www.googleapis.com/auth/spreadsheets'
        ]
        })
        const sheets = google.sheets({
            auth,
            version: 'v4'
        })
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.SPREADSHEET_ID,
            range: 'A1:A1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [body["email"]]
                ]
            }
        })

        return new Response(
            JSON.stringify({data: response.data}),
            { status: 200 }
        )

    } catch (error) {
        console.error(error)
        return new Response(
            JSON.stringify({message: "Something went wrong"}),
            { status: 500 }
        )
    }
}
