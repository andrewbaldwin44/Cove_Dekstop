import React from 'react';
import { connect } from 'react-redux';

import Reset from 'styles/Reset';
import Grid from 'styles/Grid';
import Typography, { TypographyUtils } from 'styles/Typography';
import Utility from 'styles/Utility';
import Input from 'styles/Input';
import Colors from 'styles/Colors';
import { IThemeColors } from 'styles/config/themes';

interface IGlobalStyles {
  colors: IThemeColors;
}

function GlobalStyles({ colors }: IGlobalStyles) {
  return (
    <>
      <Reset />
      <Grid />
      <Typography />
      <TypographyUtils />
      <Utility />
      <Input />
      <Colors colors={colors} />
    </>
  );
}

const storeConnector = ({ theme }: { theme: { colors: IThemeColors } }) => ({
  colors: theme.colors,
});

export default connect(storeConnector)(GlobalStyles);
