export default {
  title: 'Components/List/description-list',
};

const Template = (args) =>
  `<ecl-description-list
    theme="${args.theme}"
    variant="${args.variant}"
  >
    <ecl-description-list-term
      theme="${args.theme}"
    >
      Standard text
    </ecl-description-list-term>
    <ecl-description-list-definition
      type="text"
      theme="${args.theme}"
    >
      Lorem ipsum dolor sit amet, <a href="/component-library/example" class="ecl-link">consectetur adipiscing elit</a>. Suspendisse ut sapien condimentum, aliquet turpis sit amet, finibus purus. Donec porttitor iaculis felis ut dapibus. Sed blandit, massa ac suscipit facilisis
    </ecl-description-list-definition>
    <ecl-description-list-term
      theme="${args.theme}"
    >
      Standalone links
    </ecl-description-list-term>
    <ecl-description-list-definition
      type="link"
      theme="${args.theme}"
      items='[{"label": "Lorem ipsum dolor sit amet", "path": "/example.html", "icon": "copy"},{"label": "Lorem ipsum dolor sit amet", "path": "/example.html", "icon": "download"}]'
    >
    </ecl-description-list-definition>
    <ecl-description-list-term
      theme="${args.theme}"
    >
      Links inline
    </ecl-description-list-term>
    <ecl-description-list-definition
      type="inline"
      theme="${args.theme}"
      items='[{"label": "Lorem ipsum dolor sit amet", "path": "/example.html"},{"label": "Lorem ipsum dolor sit amet", "path": "/example.html"}]'
    >
    </ecl-description-list-definition>
    <ecl-description-list-term
      theme="${args.theme}"
    >
      Taxonomy list
    </ecl-description-list-term>
    <ecl-description-list-definition
      type="taxonomy"
      theme="${args.theme}"
      items='["Taxonomy item 1",{"label": "Taxonomy item 2", "path": "/example.html"},"Taxonomy item 3"]'
    >
    </ecl-description-list-definition>
  </ecl-description-list>`;

export const DescriptionList = Template.bind({});
DescriptionList.storyName = 'default';
DescriptionList.args = {
  variant: 'vertical',
};
DescriptionList.argTypes = {
  variant: {
    type: { name: 'select'},
    options: [
      'vertical',
      'horizontal',
    ],
    description: 'Choose variant',
  },
};