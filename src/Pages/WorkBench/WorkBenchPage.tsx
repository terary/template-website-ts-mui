import { PageContentWrapper } from "../../Application/PageContentWrapper";
import { AppConfigWidget } from "./AppConfigWidget";
export const WorkBenchPage = (): JSX.Element => {
  return (
    <PageContentWrapper>
      <span>Work Bench</span>
      <AppConfigWidget />
    </PageContentWrapper>
  );
};
