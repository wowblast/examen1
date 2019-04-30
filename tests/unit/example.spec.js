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
      propsData: { msg }
    })
  })

  it('Usuarios iniciales', () => {
    expect(wrapper.vm.allUsers()).to.equal(3)
  })

  it('eliminar usuario', () => {
    expect(wrapper.vm.allUsers()).to.equal(3)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.allUsers()).to.equal(2)
  })
  it('Usuario añadido', () => {
    wrapper.find('form').trigger('submit')

    expect(wrapper.vm.allUsers()).to.equal(4)
  })
  it('botones por usuario', () => {
    expect(wrapper.findAll('button').length).equals(3)
  })
  it('formulario mostrado', () => {
    expect(wrapper.contains('form')).equals(true)
  })
  it('Se muestra el parrafo de usuario contactado', async () => {
    const myCheckbox = wrapper.find('.toggle')
    myCheckbox.trigger('click')
    expect(wrapper.contains('.alert')).equals(true)
  })
})
