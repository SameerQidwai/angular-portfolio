export class routes {
  private static Url = '';

  public static get baseUrl(): string {
    return this.Url;
  }
  public static get home(): string {
    return this.baseUrl + '';
  }

  public static get rental(): string {
    return this.baseUrl + '/bilutleie';
  }
  public static get moving(): string {
    return this.baseUrl + '/flytting';
  }

  public static get listingList(): string {
    return this.baseUrl + '/varebiler';
  }

  public static get listingLists(): string {
    return this.baseUrl + '/elbiler';
  }

  public static get listingListes(): string {
    return this.baseUrl + '/personbiler';
  }

  public static get listingGrid(): string {
    return this.baseUrl + '/listings/listing-grid';
  }

  public static get listingDetails(): string {
    return this.baseUrl + '/bilutleie';
  }

  public static get longTermRent(): string {
    return this.baseUrl + '/langtidsleie';
  }

  public static get roadSideAssistant(): string {
    return this.baseUrl + '/veihjelp';
  }

  public static get privateMoving(): string {
    return this.baseUrl + '/privatflytting';
  }

  public static get companyMoving(): string {
    return this.baseUrl + '/bedriftsflytting';
  }

  public static get packing(): string {
    return this.baseUrl + '/pakking';
  }

  public static get estate(): string {
    return this.baseUrl + '/dødsbo';
  }

  public static get garbageTrash(): string {
    return this.baseUrl + '/søppelkast';
  }

  public static get warehouse(): string {
    return this.baseUrl + '/lagerhotell';
  }
  public static get aboutUs(): string {
    return this.baseUrl + '/pages/about-us';
  }
  public static get register(): string {
    return this.baseUrl + '/authentication/register';
  }
  public static get login(): string {
    return this.baseUrl + '/authentication/login';
  }
  public static get forgotPassword(): string {
    return this.baseUrl + '/authentication/forgot-password';
  }
  public static get resetPassword(): string {
    return this.baseUrl + '/authentication/reset-password';
  }
  public static get bookingPayment(): string {
    return this.baseUrl + '/booking/booking-payment';
  }
  public static get bookingList(): string {
    return this.baseUrl + '/booking/booking-list';
  }
  public static get invoiceDetails(): string {
    return this.baseUrl + '/booking/invoice-details';
  }
  public static get error404(): string {
    return this.baseUrl + '/error/error404';
  }
  public static get error500(): string {
    return this.baseUrl + '/error/error500';
  }
  public static get pricing(): string {
    return this.baseUrl + '/pages/pricing';
  }
  public static get faq(): string {
    return this.baseUrl + '/pages/faq';
  }
  public static get gallery(): string {
    return this.baseUrl + '/pages/gallery';
  }
  public static get ourTeam(): string {
    return this.baseUrl + '/pages/our-team';
  }
  public static get testimonial(): string {
    return this.baseUrl + '/pages/testimonial';
  }
  public static get termsCondition(): string {
    return this.baseUrl + '/pages/terms-condition';
  }
  public static get privacyPolicy(): string {
    return this.baseUrl + '/pages/privacy-policy';
  }
  public static get maintenance(): string {
    return this.baseUrl + '/pages/maintenance';
  }
  public static get blogList(): string {
    return this.baseUrl + '/blog/blog-list';
  }
  public static get blogGrid(): string {
    return this.baseUrl + '/blog/blog-grid';
  }
  public static get blogDetails(): string {
    return this.baseUrl + '/blog/blog-details';
  }
  public static get contactUs(): string {
    return this.baseUrl + '/kontakt-oss';
  }

  public static get comingSoon(): string {
    return this.baseUrl + '/pages/coming-soon';
  }
}
