import AccessWithLimit from './AccessWithLimit';
import AutoCounter from './AutoCounter';
import CheckboxSummary from './CheckboxSummary';
import ClickHistory from './ClickHistory';
import DocumentTitleChanger from './DocumentTitleChanger';

export default function IndexUseState() {
  return (
    <>
      <AccessWithLimit/>
      <AutoCounter/>
      <CheckboxSummary/>
      <ClickHistory/>
      <DocumentTitleChanger/>
    </>
  );
}