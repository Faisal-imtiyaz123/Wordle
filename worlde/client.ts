import { createTRPCClient, createWSClient, wsLink } from '@trpc/client';
import type { Approuter } from '../../backend';

// create persistent WebSocket connection
const wsClient = createWSClient({
  url: `ws://localhost:3001`,
});

// configure TRPCClient to use WebSockets transport
const client = createTRPCClient<Approuter>({
  links: [
    wsLink({
      client: wsClient,
    }),
  ],
});