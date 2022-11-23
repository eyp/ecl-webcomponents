import iconPath from '@ecl/resources-ec-icons/dist/sprites/icons.svg';

export default {
  title: 'Components/accordion',
};

const Template = (args) => `<ecl-accordion theme="${args.theme}">
          <ecl-accordion-item
            id="ecl-accordion-item-id-1"
            label="Delivery of last pending proposals, a common Destiny of unity, the hour of European Democracy"
            icon-path="${iconPath}"
          >
            The College of Commissioners held today the first weekly meeting of 2019 which was devoted to discussing the
            challenges of this new year. Commissioners used the opportunity to take stock and discuss the year ahead,
            including the European elections in May and other important milestones ahead.
          </ecl-accordion-item>

          <ecl-accordion-item
            id="ecl-accordion-item-id-2"
            label="Energy union and climate"
            icon-path="${iconPath}"
            expanded
          >
            A balanced and progressive trade policy to harness globalisation
          </ecl-accordion-item>

          <ecl-accordion-item
            id="ecl-accordion-item-id-3"
            label="Delivery of last pending proposals, a common Destiny of unity, the hour of European Democracy"
            icon-path="${iconPath}"
          >
            In the modern global economy trade is essential for growth, jobs and competiveness, and the EU is committed to
            maintaining an open and rules-based trading system. With the rising threat of protectionism and weakened
            commitment of large players to global trade governance, the EU must take the lead.
          </ecl-accordion-item>
      </ecl-accordion>`;

export const Accordion = Template.bind({});
Accordion.args = {
  theme: 'ec',
};
Accordion.argTypes = {
  theme: {
    type: 'select',
    options: ['ec', 'eu'], 
    description: 'Ec or EU theme'
  },
};
