import { types } from 'mobx-state-tree';
import Store from './Store';

export const ObjectModel = types.model({
  id: types.number,
  price: types.number,
  Quan: types.number,
  Default: types.number,
  totalPrice: types.number,
  Final: types.number,
  title: types.string,
  desc: types.string,
});
const Estore = types
  .model('Items', {
    listItem: types.array(ObjectModel),
  })
  .actions(self => ({
    increase(id) {
      const val = self.listItem.find(item => item.id === id)
      if (val.Quan >= 0) {
        val.Quan++;
        val.totalPrice += val.price
        // self.listItem[index].Quan++;
        // self.listItem[index].totalPrice += self.listItem[index].price;
      }
    },
    Decr(id) {
      const val = self.listItem.find(item => item.id === id)
      if (val.Quan > 1) {
        val.Quan--;
        val.totalPrice -= val.price
      }
      // if (self.listItem[index].Quan > 1) {
      //   self.listItem[index].Quan--;
      //   self.listItem[index].totalPrice -= self.listItem[index].price;
      // }
    }
  }))

const store = Estore.create({
  listItem: Store,
});
export default store;
