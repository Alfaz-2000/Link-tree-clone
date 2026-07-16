import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    const body = await request.json()
     const client = await clientPromise;
    const db = client.db("bittress")
    const collection = db.collection("links")

    // this below line check in collection.findOne check if handle already present in db or not
const doc = await collection.findOne({handle:body.handle})
if (doc){
    return Response.json({ success:false, error:true, message: 'This BitTree handle is already taken!', result:null })

}

    const result = await collection.insertOne(body)
  return Response.json({ success:true, error:false, message: 'Successfuly created your BitTree!', result:'result' })
}