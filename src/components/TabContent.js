import { useEffect } from 'react';

export default function TabContent(props) {
  useEffect(() => {
    props.setTabStyle(true);
  });

  if (props.tab === 0) return <div>first content</div>;
  else if (props.tab === 1) return <div>second content</div>;
  else if (props.tab === 2) return <div>third content</div>;
}
