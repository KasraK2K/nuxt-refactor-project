---
title: استراتژی
englishTitle: Strategy
type: رفتاری
englishType: Behavioral
folder: behavioral
description: "یک الگوی طراحی رفتاری است که به شما امکان می دهد خانواده ای از الگوریتم ها را تعریف کنید ، هر یک از آنها را در یک کلاس جداگانه قرار دهید و آبجکت آنها را جایگزین کنید."
image: strategy.png
structure: structure.png
problem: problem.png
solution: solution.png
comic: strategy-comic-1-en.png
slug: strategy
thumbnail: strategy-mini.png
---

<h2 class="h2 mb-4"><v-icon color="black" x-large>mdi-message-processing-outline</v-icon> کاربرد</h2>

استراتژی یک الگوی طراحی رفتاری است که به شما امکان می دهد خانواده‌ای از الگوریتم‌ها را تعریف کنید ، هر یک از آنها را در یک کلاس جداگانه قرار دهید و آبجکت آنها را جایگزین کنید.

<AssetsImage path="design-pattern/strategy/strategy.png" max-width-props="640" class-props="my-14 mx-auto"></AssetsImage>

<h2 class="h2 mt-6 mb-3"><v-icon color="black" x-large>mdi-emoticon-sad-outline</v-icon> مشکل</h2>

یک روز تصمیم گرفتید یک برنامه ناوبری برای مسافران عادی ایجاد کنید. این برنامه حول یک نقشه زیبا بود که به کاربران کمک می‌کرد تا به سرعت خود را در هر شهری قرار دهند.

یکی از پرکاربردترین ویژگی‌های برنامه ، برنامه ریزی خودکار مسیر بود. کاربر باید بتواند یک آدرس وارد کند و سریعترین مسیر را به آن مقصد نشان داده شده روی نقشه ببیند.

اولین نسخه برنامه فقط می‌توانست مسیرهای جاده‌ها را ایجاد کند. افرادی که با اتومبیل سفر می‌کردند از شادی می‌ترکیدند. اما ظاهراً ، همه دوست ندارند در تعطیلات خود رانندگی کنند. بنابراین با به روزرسانی بعدی ، گزینه‌ای برای ایجاد مسیرهای پیاده روی اضافه کردید. بلافاصله پس از آن ، گزینه دیگری اضافه کردید تا به افراد اجازه دهید در مسیرهای خود از وسایل حمل و نقل عمومی استفاده کنند.

با این حال ، این تنها آغاز کار بود. بعداً قصد داشتید مسیر دوچرخه سواری را اضافه کنید. و حتی بعداً ، گزینه دیگری برای ساخت مسیرها از طریق تمام جاذبه‌های گردشگری یک شهر.

<AssetsImage path="design-pattern/strategy/problem.png" max-width-props="330" class-props="mx-auto" div-class="my-12" caption="کد ناوبری متورم شد."></AssetsImage>

در حالی که از منظر کسب و کار این برنامه موفقیت آمیز بود ، قسمت فنی شما را دچار سردردهای زیادی کرد. هر بار که الگوریتم مسیریابی جدیدی اضافه می‌کنید ، اندازه کلاس اصلی ناوبری دو برابر می‌شود. در برخی از زمان‌ها ، نگهداری بیش از حد سخت شده است.

هرگونه تغییر در یکی از الگوریتم‌ها ، خواه یک رفع اشکال ساده باشد و یا با تنظیم جزئی نمره خیابان ، کل کلاس را تحت تأثیر قرار داده و احتمال ایجاد خطا در کد را افزایش می دهد.

علاوه بر این ، کار گروهی ناکارآمد شد. هم تیمی‌های شما که بلافاصله پس از آزادی موفقیت آمیز استخدام شده‌اند ، شکایت دارند که وقت زیادی را برای حل تعارضات ادغام می‌کنند. پیاده‌سازی یک ویژگی جدید نیاز به تغییر همان کلاس عظیم دارد که با کد تولید شده توسط افراد دیگر مغایرت دارد.

<h2 class="h2 mt-6 mb-3"><v-icon color="black" x-large>mdi-emoticon-happy-outline</v-icon> راه حل</h2>

الگوی استراتژی پیشنهاد می‌کند که شما کلاسی را شرکت کنید که کار خاصی را به طرق مختلف انجام دهد و همه این الگوریتم‌ها را در کلاس‌های جداگانه‌ای بنام استراتژی استخراج کنید.

کلاس اصلی ، زمینه نامیده می‌شود ، باید زمینه ذخیره‌سازی ارجاع به یکی از استراتژی‌ها را داشته باشد. متن کار را به جای اینکه آن را به تنهایی اجرا کند ، به یک شی مرتبط با استراتژی تفویض می‌کند.

زمینه مسئول انتخاب الگوریتم مناسب برای کار نیست. در عوض ، مشتری استراتژی مورد نظر را به زمینه انتقال می‌دهد. در واقع ، زمینه چیز زیادی در مورد استراتژی‌ها نمی داند. این با تمام استراتژی‌ها از طریق همان رابط عمومی کار می‌کند ، که فقط یک روش واحد را برای تحریک الگوریتم کپسول شده در استراتژی انتخاب شده نشان می‌دهد.

به این ترتیب زمینه از استراتژی‌های مشخص مستقل می‌شود ، بنابراین می‌توانید الگوریتم‌های جدیدی اضافه کنید یا الگوی موجود را بدون تغییر کد زمینه یا سایر استراتژی ها اصلاح کنید.

<AssetsImage path="design-pattern/strategy/solution.png" max-width-props="570" class-props="mx-auto" div-class="my-12" caption="استراتژی‌های برنامه ریزی مسیر."></AssetsImage>

در برنامه پیمایش ما ، هر الگوریتم مسیریابی را می توان با یک روش مسیر را بسازید به کلاس خودش استخراج کرد. این روش مبدا و مقصد را می پذیرد و مجموعه ای از ایست های بازرسی مسیر را برمی گرداند

حتی اگر با توجه به همان استدلال‌ها ، هر کلاس مسیریابی ممکن است مسیری متفاوت ایجاد کند ، کلاس اصلی ناوبری برایشان مهم نیست که کدام الگوریتم انتخاب شده است زیرا کار اصلی آن ارائه مجموعه‌ای از ایست‌های بازرسی بر روی نقشه است. کلاس دارای روشی برای تغییر استراتژی مسیریابی فعال است ، بنابراین سرویس گیرندگان آن مانند دکمه‌های موجود در رابط کاربری می‌توانند رفتار مسیریابی فعلی انتخاب شده را با روش دیگری جایگزین کنند.

<h2 class="h2 mt-6 mb-3"><v-icon color="black" x-large>mdi-car-hatchback</v-icon> قیاس در دنیای واقعی</h2>

<AssetsImage path="design-pattern/strategy/strategy-comic-1-en.png" max-width-props="640" class-props="mx-auto" div-class="my-12" caption="استراتژی‌های مختلف برای رسیدن به فرودگاه."></AssetsImage>

تصور کنید که باید به فرودگاه بروید. می‌توانید سوار اتوبوس شوید ، کابین سفارش دهید یا سوار دوچرخه شوید. اینها استراتژی‌های حمل و نقل شما هستند. بسته به عواملی مانند بودجه یا محدودیت زمانی می‌توانید یکی از استراتژی‌ها را انتخاب کنید.