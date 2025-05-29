<template>
  <footer class="py-8 px-4 sm:px-6 lg:px-8">
    <div class="container">
      <div class="grid md:grid-cols-2 md:grid-cols-5 gap-8">
        <!-- Product Column -->
        <div>
          <img src="@/assets/images/Requestdemo/codeicon.png" alt="" />
        </div>
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider">Product</h3>
          <ul class="mt-4 space-y-2">
            <li v-for="(item, index) in productItems" :key="'product-' + index">
              <a href="#" class="text-sm text-muted-foreground hover:text-primary">{{ item }}</a>
            </li>
          </ul>
        </div>

        <!-- Legal Column -->
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider">Legal</h3>
          <ul class="mt-4 space-y-2">
            <li v-for="(item, index) in legalItems" :key="'legal-' + index">
              <a href="#" class="text-sm text-muted-foreground hover:text-primary">{{ item }}</a>
            </li>
          </ul>
        </div>

        <!-- Company Column -->
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider">Company</h3>
          <ul class="mt-4 space-y-2">
            <li v-for="(item, index) in companyItems" :key="'company-' + index">
              <a href="#" class="text-sm text-muted-foreground hover:text-primary">{{ item }}</a>
            </li>
          </ul>
        </div>

        <!-- Social Column -->
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider">Social</h3>
          <ul class="mt-4 space-y-2">
            <li v-for="(item, index) in socialItems" :key="'social-' + index">
              <a href="#" class="text-sm text-muted-foreground hover:text-primary">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="pt-8">
        <p class="text-xs text-gray-500 text-center">All rights reserved.© 2024 DejectStudio</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      productItems: ['Features', 'Pricing', 'Changelog', 'Support'],
      legalItems: ['Terms of Privacy', 'Privacy Policy', 'Security'],
      companyItems: ['Blog', 'Contact', 'Discord'],
      socialItems: ['Dribbble', 'Behance']
    }
  }
}
</script>
