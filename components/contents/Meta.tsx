import { FC, useContext } from "react";
import { Grid, Segment } from "semantic-ui-react";

import { BlogContext } from "../../lib/BlogContext";
import { About } from "./About";


interface MetaProps {
  inverted?: boolean;
}

const Meta: FC<MetaProps> = ({ inverted }) => {
  const { language } = useContext(BlogContext);
  return (
    <Segment basic inverted={inverted} size="small">
      {language === "ja" ? (
        <Grid stackable divided columns={3}>
          <Grid.Column width={10}>
            <About inverted={inverted} />
          </Grid.Column>
        </Grid>
      ) : (
        <About inverted />
      )}
    </Segment>
  );
};

export { Meta };