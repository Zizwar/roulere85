import { HandlerContext } from "$fresh/server.ts";

import {data} from "../../utils/data.ts" 


export const handler = (_req: Request, _ctx: HandlerContext): Response => {

  return Response.json(data)

  //const body = JSON.stringify(data);
 // return new Response(body);
};


