import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
   index("routes/home/home.tsx"),
   route("talent-flow", "routes/talentFlowService/talentFlowService.tsx"),
   route("landing-service", "routes/landingService/landingService.tsx"),
] satisfies RouteConfig;
