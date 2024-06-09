import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'CSDN',
          title: 'CSDN',
          href: 'https://i.csdn.net/#/user-center/profile?spm=1000.2115.3001.5111',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/shuluohr',
          blankTarget: true,
        }

      ]}
    />
  );
};

export default Footer;
