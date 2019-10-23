import { createLocalVue, mount } from '@vue/test-utils';
import Vuex, { Store } from 'vuex';
import { i18n } from '@/app/shared/plugins/i18n/i18n';
import Textract from './Textract.vue';
import { ITextractState } from '../state';
import { TextractModule } from '../module';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Textract.vue', () => {
  let store: Store<ITextractState>;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        textract: TextractModule,
      },
    } as any);
  });

  test('renders component', () => {
    const wrapper = mount<any>(Textract, {
      store,
      localVue,
      i18n,
      stubs: ['router-link'],
    });

    Textract.prefetch({});

    expect(wrapper.find('h1').text()).toBe('Textract');
  });
});
