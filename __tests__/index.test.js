import CezeriClient from '../src/index';

const API_CREDENTIALS = {
	apiBaseUrl: '/api',
	apiToken: '<test>'
};

const AJAX_CREDENTIALS = {
	ajaxBaseUrl: '/ajax'
};

test('api structure', () => {
	const api = new CezeriClient(API_CREDENTIALS);
	expect(typeof api.products.list).toBe('function');
	expect(typeof api.products.retrieve).toBe('function');
	expect(typeof api.products.create).toBe('function');
	expect(typeof api.products.update).toBe('function');
	expect(typeof api.products.delete).toBe('function');
	expect(typeof api.products.skuExists).toBe('function');
	expect(typeof api.products.slugExists).toBe('function');
	expect(typeof api.products.options.list).toBe('function');
	expect(typeof api.products.options.retrieve).toBe('function');
	expect(typeof api.products.options.create).toBe('function');
	expect(typeof api.products.options.update).toBe('function');
	expect(typeof api.products.options.delete).toBe('function');
	expect(typeof api.products.options.values.list).toBe('function');
	expect(typeof api.products.options.values.retrieve).toBe('function');
	expect(typeof api.products.options.values.create).toBe('function');
	expect(typeof api.products.options.values.update).toBe('function');
	expect(typeof api.products.options.values.delete).toBe('function');
	expect(typeof api.products.variants.list).toBe('function');
	expect(typeof api.products.variants.create).toBe('function');
	expect(typeof api.products.variants.update).toBe('function');
	expect(typeof api.products.variants.delete).toBe('function');
	expect(typeof api.products.variants.setOption).toBe('function');
	expect(typeof api.products.images.list).toBe('function');
	expect(typeof api.products.images.update).toBe('function');
	expect(typeof api.products.images.upload).toBe('function');
	expect(typeof api.products.images.delete).toBe('function');
	expect(typeof api.productCategories.list).toBe('function');
	expect(typeof api.productCategories.retrieve).toBe('function');
	expect(typeof api.productCategories.create).toBe('function');
	expect(typeof api.productCategories.update).toBe('function');
	expect(typeof api.productCategories.delete).toBe('function');
	expect(typeof api.productCategories.uploadImage).toBe('function');
	expect(typeof api.productCategories.deleteImage).toBe('function');
	expect(typeof api.customers.list).toBe('function');
	expect(typeof api.customers.retrieve).toBe('function');
	expect(typeof api.customers.create).toBe('function');
	expect(typeof api.customers.update).toBe('function');
	expect(typeof api.customers.delete).toBe('function');
	expect(typeof api.customers.createAddress).toBe('function');
	expect(typeof api.customers.updateAddress).toBe('function');
	expect(typeof api.customers.deleteAddress).toBe('function');
	expect(typeof api.customers.setDefaultBillingAddress).toBe('function');
	expect(typeof api.customers.setDefaultShippingAddress).toBe('function');
	expect(typeof api.customerGroups.list).toBe('function');
	expect(typeof api.customerGroups.retrieve).toBe('function');
	expect(typeof api.customerGroups.create).toBe('function');
	expect(typeof api.customerGroups.update).toBe('function');
	expect(typeof api.customerGroups.delete).toBe('function');
	expect(typeof api.orders.list).toBe('function');
	expect(typeof api.orders.retrieve).toBe('function');
	expect(typeof api.orders.create).toBe('function');
	expect(typeof api.orders.update).toBe('function');
	expect(typeof api.orders.delete).toBe('function');
	expect(typeof api.orders.recalculate).toBe('function');
	expect(typeof api.orders.checkout).toBe('function');
	expect(typeof api.orders.cancel).toBe('function');
	expect(typeof api.orders.close).toBe('function');
	expect(typeof api.orders.updateBillingAddress).toBe('function');
	expect(typeof api.orders.updateShippingAddress).toBe('function');
	expect(typeof api.orders.getPaymentFormSettings).toBe('function');
	expect(typeof api.orders.discounts.create).toBe('function');
	expect(typeof api.orders.discounts.update).toBe('function');
	expect(typeof api.orders.discounts.delete).toBe('function');
	expect(typeof api.orders.transactions.create).toBe('function');
	expect(typeof api.orders.transactions.update).toBe('function');
	expect(typeof api.orders.transactions.delete).toBe('function');
	expect(typeof api.orders.items.create).toBe('function');
	expect(typeof api.orders.items.update).toBe('function');
	expect(typeof api.orders.items.delete).toBe('function');
	expect(typeof api.orderStatuses.list).toBe('function');
	expect(typeof api.orderStatuses.retrieve).toBe('function');
	expect(typeof api.orderStatuses.create).toBe('function');
	expect(typeof api.orderStatuses.update).toBe('function');
	expect(typeof api.orderStatuses.delete).toBe('function');
	expect(typeof api.prescriptions.list).toBe('function');
	expect(typeof api.prescriptions.retrieve).toBe('function');
	expect(typeof api.prescriptions.create).toBe('function');
	expect(typeof api.prescriptions.update).toBe('function');
	expect(typeof api.prescriptions.delete).toBe('function');
	expect(typeof api.prescriptions.estimate).toBe('function');
	expect(typeof api.prescriptions.checkout).toBe('function');
	expect(typeof api.prescriptions.cancel).toBe('function');
	expect(typeof api.prescriptions.close).toBe('function');
	expect(typeof api.prescriptions.updateBillingAddress).toBe('function');
	expect(typeof api.prescriptions.updateShippingAddress).toBe('function');
	expect(typeof api.prescriptions.getPaymentFormSettings).toBe('function');
	expect(typeof api.prescriptions.transactions.create).toBe('function');
	expect(typeof api.prescriptions.transactions.update).toBe('function');
	expect(typeof api.prescriptions.transactions.delete).toBe('function');
	expect(typeof api.prescriptions.items.create).toBe('function');
	expect(typeof api.prescriptions.items.update).toBe('function');
	expect(typeof api.prescriptions.items.delete).toBe('function');
	expect(typeof api.prescriptionStatuses.list).toBe('function');
	expect(typeof api.prescriptionStatuses.retrieve).toBe('function');
	expect(typeof api.prescriptionStatuses.create).toBe('function');
	expect(typeof api.prescriptionStatuses.update).toBe('function');
	expect(typeof api.prescriptionStatuses.delete).toBe('function');
	expect(typeof api.shippingMethods.list).toBe('function');
	expect(typeof api.shippingMethods.retrieve).toBe('function');
	expect(typeof api.shippingMethods.create).toBe('function');
	expect(typeof api.shippingMethods.update).toBe('function');
	expect(typeof api.shippingMethods.delete).toBe('function');
	expect(typeof api.paymentMethods.list).toBe('function');
	expect(typeof api.paymentMethods.retrieve).toBe('function');
	expect(typeof api.paymentMethods.create).toBe('function');
	expect(typeof api.paymentMethods.update).toBe('function');
	expect(typeof api.paymentMethods.delete).toBe('function');
	expect(typeof api.paymentGateways.retrieve).toBe('function');
	expect(typeof api.paymentGateways.update).toBe('function');
	expect(typeof api.sitemap.list).toBe('function');
	expect(typeof api.sitemap.retrieve).toBe('function');
	expect(typeof api.theme.export).toBe('function');
	expect(typeof api.theme.install).toBe('function');
	expect(typeof api.theme.settings.retrieve).toBe('function');
	expect(typeof api.theme.settings.update).toBe('function');
	expect(typeof api.theme.settings.retrieveSchema).toBe('function');
	expect(typeof api.theme.assets.uploadFile).toBe('function');
	expect(typeof api.theme.assets.deleteFile).toBe('function');
	expect(typeof api.theme.placeholders.list).toBe('function');
	expect(typeof api.theme.placeholders.retrieve).toBe('function');
	expect(typeof api.theme.placeholders.create).toBe('function');
	expect(typeof api.theme.placeholders.update).toBe('function');
	expect(typeof api.theme.placeholders.delete).toBe('function');
	expect(typeof api.countries.list).toBe('function');
	expect(typeof api.currencies.list).toBe('function');
	expect(typeof api.text.list).toBe('function');
	expect(typeof api.settings.retrieve).toBe('function');
	expect(typeof api.settings.update).toBe('function');
	expect(typeof api.settings.retrieveEmailSettings).toBe('function');
	expect(typeof api.settings.updateEmailSettings).toBe('function');
	expect(typeof api.settings.retrieveEmailTemplate).toBe('function');
	expect(typeof api.settings.updateEmailTemplate).toBe('function');
	expect(typeof api.settings.uploadLogo).toBe('function');
	expect(typeof api.settings.deleteLogo).toBe('function');
	expect(typeof api.checkoutFields.list).toBe('function');
	expect(typeof api.checkoutFields.retrieve).toBe('function');
	expect(typeof api.checkoutFields.update).toBe('function');
	expect(typeof api.pages.list).toBe('function');
	expect(typeof api.pages.retrieve).toBe('function');
	expect(typeof api.pages.create).toBe('function');
	expect(typeof api.pages.update).toBe('function');
	expect(typeof api.pages.delete).toBe('function');
	expect(typeof api.tokens.list).toBe('function');
	expect(typeof api.tokens.retrieve).toBe('function');
	expect(typeof api.tokens.create).toBe('function');
	expect(typeof api.tokens.update).toBe('function');
	expect(typeof api.tokens.delete).toBe('function');
	expect(typeof api.redirects.list).toBe('function');
	expect(typeof api.redirects.retrieve).toBe('function');
	expect(typeof api.redirects.create).toBe('function');
	expect(typeof api.redirects.update).toBe('function');
	expect(typeof api.redirects.delete).toBe('function');
	expect(typeof api.webhooks.list).toBe('function');
	expect(typeof api.webhooks.retrieve).toBe('function');
	expect(typeof api.webhooks.create).toBe('function');
	expect(typeof api.webhooks.update).toBe('function');
	expect(typeof api.webhooks.delete).toBe('function');
	expect(typeof api.files.list).toBe('function');
	expect(typeof api.files.upload).toBe('function');
	expect(typeof api.files.delete).toBe('function');
	expect(typeof api.apps.settings.retrieve).toBe('function');
	expect(typeof api.apps.settings.update).toBe('function');
});

test('ajax structure', () => {
	const api = new CezeriClient(AJAX_CREDENTIALS);
	expect(typeof api.ajax.products.list).toBe('function');
	expect(typeof api.ajax.products.retrieve).toBe('function');
	expect(typeof api.ajax.products.create).toBe('function');
	expect(typeof api.ajax.products.update).toBe('function');
	expect(typeof api.ajax.products.delete).toBe('function');
	expect(typeof api.ajax.products.skuExists).toBe('function');
	expect(typeof api.ajax.products.slugExists).toBe('function');
	expect(typeof api.ajax.sitemap.list).toBe('function');
	expect(typeof api.ajax.sitemap.retrieve).toBe('function');
	expect(typeof api.ajax.cart.retrieve).toBe('function');
	expect(typeof api.ajax.cart.update).toBe('function');
	expect(typeof api.ajax.cart.checkout).toBe('function');
	expect(typeof api.ajax.cart.updateBillingAddress).toBe('function');
	expect(typeof api.ajax.cart.updateShippingAddress).toBe('function');
	expect(typeof api.ajax.cart.addItem).toBe('function');
	expect(typeof api.ajax.cart.updateItem).toBe('function');
	expect(typeof api.ajax.cart.deleteItem).toBe('function');
	expect(typeof api.ajax.countries.list).toBe('function');
	expect(typeof api.ajax.currencies.list).toBe('function');
	expect(typeof api.ajax.shippingMethods.list).toBe('function');
	expect(typeof api.ajax.paymentMethods.list).toBe('function');
	expect(typeof api.ajax.paymentFormSettings.retrieve).toBe('function');
	expect(typeof api.ajax.pages.list).toBe('function');
	expect(typeof api.ajax.pages.retrieve).toBe('function');
	expect(typeof api.ajax.pages.create).toBe('function');
	expect(typeof api.ajax.pages.update).toBe('function');
	expect(typeof api.ajax.pages.delete).toBe('function');
});

test('webstore structure', () => {
	const api = new CezeriClient(AJAX_CREDENTIALS);
	expect(typeof api.webstore.account.retrieve).toBe('function');
	expect(typeof api.webstore.account.update).toBe('function');
	expect(typeof api.webstore.account.updateDeveloper).toBe('function');
	expect(typeof api.webstore.services.list).toBe('function');
	expect(typeof api.webstore.services.retrieve).toBe('function');
	expect(typeof api.webstore.services.enable).toBe('function');
	expect(typeof api.webstore.services.disable).toBe('function');
	expect(typeof api.webstore.services.settings.retrieve).toBe('function');
	expect(typeof api.webstore.services.settings.update).toBe('function');
	expect(typeof api.webstore.services.actions.call).toBe('function');
	expect(typeof api.webstore.services.logs.list).toBe('function');
});

test('static methods', () => {
	expect(typeof CezeriClient.authorize).toBe('function');
	expect(typeof CezeriClient.authorizeInWebStore).toBe('function');
});
