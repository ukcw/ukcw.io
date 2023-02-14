import * as fs from 'fs';
import { LoaderArgs } from "@remix-run/cloudflare";

export async function loader({ params }: LoaderArgs) {
  // const report = await getReport(params.id);
  // const pdf = await generateReportPDF(report);

  const pdf = fs.readFileSync("../../public/My_Resume.pdf");
  console.log(pdf)

  return new Response(pdf, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
    },
  });
}

// export default function Resume() {
//   return (
//     <iframe src="./My_Resume.pdf" />
//   );
//   {/* <div> */ }
//   {/*   <NavBar /> */ }
//   {/*   <h1 className="text-primary">Hello There</h1> */ }
//   {/* </div> */ }
// }
