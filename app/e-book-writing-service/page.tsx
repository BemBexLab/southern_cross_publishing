import React from "react";
import PublishingServicePageContent from "../publishing-services/[slug]/PublishingServicePageContent";
import { defaultPublishingServicePageData } from "../publishing-services/[slug]/data";

const page = () => {
  return <PublishingServicePageContent pageData={defaultPublishingServicePageData} />;
};

export default page;
