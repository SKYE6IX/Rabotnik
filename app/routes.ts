import { type RouteConfig, index, route } from "@react-router/dev/routes";
export default [
   index("routes/home/home.tsx"),
   route("talent-flow", "routes/talentFlowService/talentFlowService.tsx"),
   route("landing-service", "routes/landingService/landingService.tsx"),
   route(
      "lead-processing",
      "routes/leadProcessingService/leadProcessingService.tsx"
   ),
   route("creative-ads", "./routes/creativeAdsService/creativeAdsService.tsx"),
   route(
      "ad-management",
      "./routes/adManagementService/adManagementService.tsx"
   ),
   route("tg-network", "./routes/tgNetworkService/tgNetworkService.tsx"),
] satisfies RouteConfig;
