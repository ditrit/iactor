import TerraformParser from './parser/TerraformParser';
import TerraformMetadata from './metadata/TerraformMetadata';
import TerraformRender from './render/TerraformRender';
import { DefaultDrawer } from 'leto-modelizer-plugin-core';

export default {
  PluginDrawer: DefaultDrawer,
  PluginMetadata: TerraformMetadata,
  PluginParser: TerraformParser,
  PluginRender: TerraformRender,
};
