import { HTTPuppyServer } from "types";

export default function useRouter(
	server: HTTPuppyServer.Runtime,
	options: HTTPuppyServer.HTTPuppyRouterOptions
) {
	server.on('request', options.callback);
}
