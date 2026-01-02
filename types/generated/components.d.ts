import type { Schema, Struct } from '@strapi/strapi';

export interface SharedFooterNav extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_navs';
  info: {
    displayName: 'Footer-nav';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    item: Schema.Attribute.Component<'shared.link-item', true> &
      Schema.Attribute.Required;
  };
}

export interface SharedLinkItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_link_items';
  info: {
    displayName: 'Link-Item';
  };
  attributes: {
    lable: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedMenuDescription extends Struct.ComponentSchema {
  collectionName: 'components_shared_menu_descriptions';
  info: {
    displayName: 'MenuDescription';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMultiMenuLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_multi_menu_links';
  info: {
    displayName: 'Multi_MenuLink';
  };
  attributes: {
    navlinks: Schema.Attribute.Component<'shared.link-item', true>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.footer-nav': SharedFooterNav;
      'shared.link-item': SharedLinkItem;
      'shared.media': SharedMedia;
      'shared.menu-description': SharedMenuDescription;
      'shared.multi-menu-link': SharedMultiMenuLink;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
