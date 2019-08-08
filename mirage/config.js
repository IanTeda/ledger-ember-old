/**
 * MIRAGE ENDPOINT CONFIG
 * https://jsonapi.org/
 * https://www.ember-cli-mirage.com/docs/getting-started/overview
 */

export default function() {

  this.namespace = "ledger/api";

  this.get('/payees', () => {
    return {
      data: [
        {
          type: "payees",
          id: "1",
          attributes: {
            name: "Woolworths",
            number: "87343",
            primaryCategory: "Food:Groceries",
            image: "https://www.woolworths.com.au/Images/GlobalHeader/icon-header-logo.png",
            website: "https://www.woolworths.com.au/",
          }
        },{
          type: "payees",
          id: "2",
          attributes: {
            name: "BP",
            number: "65473",
            primaryCategory: "Transport:Fuel",
            image: "https://www.bp.com/etc/designs/refresh/bp/images/navigation/bp-logo.svg",
            website: "https://www.bp.com/",
          }
        },{
          type: "payees",
          id: "3",
          attributes: {
            name: "Amazon",
            number: "56456",
            primaryCategory: "Entertainement:Books",
            image: "https://webbygram.com/wp-content/uploads/2017/05/Amazon-Logo-720x720.png",
            website: "https://www.amazon.com.au",
          }
        }
      ]
    }
  });
}
