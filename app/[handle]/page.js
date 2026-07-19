import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { handle } = await params
   const client = await clientPromise;
    const db = client.db("bittress")
    const collection = db.collection("links")

    // this below line check in collection.findOne check if handle already present in db or not
const item = await collection.findOne({handle:handle})
if(!item){
    return notFound()
}

   const item2 = {
  "_id": {
    "$oid": "6a5cdd2a792ff6358c8551b2"
  },
  "links": [
    {
      "link": "https://www.codewithharry.com/courses/the-ultimate-job-ready-data-science-course?gad_source=1&gad_campaignid=22796777913&gbraid=0AAAAAqQsM_1mqOy0maSBSa959yUW8rtep&gclid=Cj0KCQjw6_HSBhCpARIsANvVltYd0bBz_uYmvaJOvAnouB3-fQ6jrq1DZUpSuGofvm3ODBEyhIGiMs8aAoSrEALw_wcB",
      "linktext": "website"
    },
    {
      "link": "https://www.instagram.com/codewithharry/?hl=en",
      "linktext": "instagram"
    }
  ],
  "handle": "cwh",
  "pic": "https://avatars.githubusercontent.com/u/48705673?v=4"
}
  return <div className="flex min-h-screen bg-amber-200 justify-center items-start py-10">
    {item && <div className="photo flex justify-center flex-col items-center gap-4">
        <img src={item.pic} alt="user-image" />
        <span className="font-bold text-xl">@{item.handle}</span>
        <span className="desc w-80 text-center">{item.desc}</span>
    <div className="links">
        {item.links.map((item,index)=>{
            return <Link key={index} href={item.link} target="_blank">
                <div className="bg-purple-500 py-4 shadow-lg px-2 flex justify-center rounded-md my-3 min-w-96">
                {item.linktext}
                </div></Link>
        })}
    </div>

  </div>}
</div>
}