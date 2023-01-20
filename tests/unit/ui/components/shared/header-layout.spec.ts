import { shallowMount, VueWrapper } from '@vue/test-utils';
import HeaderView from '@/components/layout/HeaderView.vue';
import { MainLogoStub, NavLinksStub } from '@t/stubs/shared';
describe('HeaderView', () => {
  let wrapper: VueWrapper<InstanceType<typeof HeaderView>>;

  beforeEach(() => {
    wrapper = shallowMount(HeaderView, {
      stubs: {
        MainLogo: MainLogoStub,
        NavLinks: NavLinksStub,
      },
    });
  });

  it('should render the main logo component', () => {
    expect(wrapper.find('main-logo-stub').exists()).toBe(true);
  });

  it('should render the nav links component', () => {
    expect(wrapper.find('nav-links-stub').exists()).toBe(true);
  });

  it('should have a class of "flex justify-center w-full h-[65px] bg-dark-blue"', () => {
    expect(wrapper.attributes().class).toContain(
      'flex justify-center w-full h-[65px] bg-dark-blue'
    );
  });
});
