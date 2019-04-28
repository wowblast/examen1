import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Users from '@/components/Users.vue'

describe('Users.vue', function () {
  const msg = 'new message'
  let wrapper
  // Crear variables que se utilizaran en todo el unit test
  before(function () {

  })

  beforeEach(function () {
    wrapper = shallowMount(Users, {
      propsData: {
        msg
      },
      user: {
        name: 'JHON',
        email: 'jfr142012@gmail.com',
        contanted: false
      }
    })
  })
  it('test method', () => {
    expect(wrapper.vm.deleteUser({ name: 'Jhon', email: 'jfr142012@gmail.com', contanted: false })).to.equal(5)
  })

  it('dom with class hello world exist', () => {
    expect(wrapper.find('.users').exists())
  })
})
