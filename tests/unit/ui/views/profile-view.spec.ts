import { shallowMount, VueWrapper } from '@vue/test-utils';
import ProfileView from '@/views/ProfilePage.vue';

describe('ProfileView', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = shallowMount(ProfileView);
  });

  it('should render h2 with text "This is the profile page"', () => {
    expect(wrapper.find('h2').text()).toBe('This is the profile page');
  });
});
