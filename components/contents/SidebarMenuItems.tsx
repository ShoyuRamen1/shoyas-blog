import Link from "next/link";
import { FC, useContext } from "react";
import { Icon, Image, Menu } from "semantic-ui-react";

import { BlogContext } from "../../lib/BlogContext";

const SidebarMenuItems: FC = () => {
  const { language } = useContext(BlogContext);
  if (language === "ja") {
    return (
      <>
        <Menu.Item as="a" href="https://junkato.jp/ja/">
          <Image avatar src="../../public/images" />
          トップ
        </Menu.Item>
        <Link href="/ja">
          <Menu.Item active as="a" href="/ja">
            <Icon name="pencil" />
            ブログ
          </Menu.Item>
        </Link>
        <Menu.Item as="a" href="https://junkato.jp/ja/projects">
          <Icon name="lab" />
          プロジェクト
        </Menu.Item>
        <Menu.Item as="a" href="https://junkato.jp/ja/design">
          <Icon name="paint brush" />
          デザイン
        </Menu.Item>
        <Menu.Item as="a" href="https://junkato.jp/ja/timeline">
          <Icon name="history" />
          活動履歴
        </Menu.Item>
        <Menu.Item as="a" href="https://junkato.jp">
          <Icon name="translate" />
          English
        </Menu.Item>
      </>
    );
  } else {
    return (
      <>
        <Menu.Item as="a" href="https://junkato.jp/">
          <Image avatar src="https://junkato.jp/images/junkato.jpg" />
          Top page
        </Menu.Item>
        <Link href="/">
          <Menu.Item active as="a" href="/">
            <Icon name="pencil" />
            Blog
          </Menu.Item>
        </Link>
        <Menu.Item as="a" href="https://junkato.jp/projects">
          <Icon name="lab" />
          Projects
        </Menu.Item>
        <Menu.Item as="a" href="https://junkato.jp/design">
          <Icon name="paint brush" />
          Design
        </Menu.Item>
        <Menu.Item as="a" href="https://junkato.jp/activities">
          <Icon name="student" />
          Activities
        </Menu.Item>
        <Menu.Item as="a" href="https://junkato.jp/timeline">
          <Icon name="history" />
          Timeline
        </Menu.Item>
        <Menu.Item as="a" href="https://junkato.jp/ja/">
          <Icon name="translate" />
          日本語
        </Menu.Item>
      </>
    );
  }
};

export { SidebarMenuItems };
