// import {Redis} from "@upstash/redis"

// export const redis = Redis.fromEnv()

import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://gusc1-coherent-adder-30283.upstash.io',
  token: 'AXZLASQgYzIzMjQzZjQtNjI2NC00ZThiLTg5NWUtODBlOGFjYWNmZTFkMmI1ZjhlOTdiYmM2NDhmOWIxMDU0OWE2ZTIyMTQyMTY=',
})

// await redis.set('foo', 'bar');
// const data = await redis.get('foo');