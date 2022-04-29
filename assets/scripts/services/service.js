const url = "https://625bc0d1398f3bc782ae7e06.mockapi.io/api/users/";

export default function Service() {}

Service.prototype.fetchData = () => axios({ url, method: "GET" });
