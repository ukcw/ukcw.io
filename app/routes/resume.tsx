import * as fs from 'fs';
import { LoaderArgs } from "@remix-run/cloudflare";

export async function loader({ params }: LoaderArgs) {
  // const report = await getReport(params.id);
  // const pdf = await generateReportPDF(report);


  const pdf = fs.readFileSync("../../public/resume.pdf");

  return new Response(pdf, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
    },
  });
}

// export default function Resume() {
//   return (
//     <iframe src="./resume.pdf" />
  // );
// }
