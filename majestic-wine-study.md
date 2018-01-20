---
layout: case-study
title: Adam Poczatek - Complete Redesign of Majestic Wine Website
description: Short story of how we made Majestic Wine website faster and more enjoyable to use with new updated UX, fresh UI and clean front-end code
image: /images/case-studies/majestic/hero.jpg
permalink: /work/majestic-replatform/
heroTitle: Majestic Wine - Replatform
heroSubtitle: This is possibly the most exciting and challenging project I have worked on to date &mdash; it took us months of hard work but I'm pleased to say it paid off.
heroImage: /images/case-studies/majestic/hero.jpg
heroImageText: Laptop with Majestic Wine website on the screen next to a glass of wine
---

Overview
--------

Majestic e-commerce website was first re-built back in 2011 by a third-party agency and it was pretty innovative at that time — it had a slick design and a dedicated mobile site.

<img src="{{ site.cdn_url }}/images/case-studies/majestic/majestic-wine-old.jpg" />

As the business grew, the requirements have changed and the website had to adopt. One of the biggest problems, however, was the fact that our website has been maintained by an agency and making code chagnes was expensive.

Back in 2015, Majestic [acquired](http://www.bbc.co.uk/news/business-32246651) a company called [Naked Wines](https://www.nakedwines.co.uk) — a relatively small tech company but with an excellent development team.

The guys at Naked Wines have built an amazing plaftorm for their e-commerce site, and naturally, Majestic wanted it too.

### My Role on the Team

I joined Majestic back in April 2016 to help with the replatform project. My official job title was lead front-end developer but since Majestic didn't really have an in-house development team, I was responsible for the UX, visual design as well as the front-end build.

We quickly managed to form a small team that consisted of a UX lead, front-end developer and myself.

In the first coupe of months our focus was on a smaller project — optimising the mobile site, introducing new delivery options and improving the checkout flow for the peak season.

More importantly though, it was an opportunity for me to get to know the team and understand how the business operates.

### Business as Usual

We started looking at the replatform project right after Christmas but there was a small problem — Majestic updates their website very frequently so we couldn't dedicate 100% of our time on the new and shiny stuff.

The amount of changes we had to make on the current site was huge — our developer was occupied for most of his time and couldn't focus on the main project as much as we wanted and we knew we had to do something about it.

Within the couple of weeks though we managed to optimise some processes and free up some of our time.

Design
------

First, we had an inception meeting followed by couple of rounds of requirements gathering and we were ready to work on the initial designs.

### Design Objectives

Majestic design team has done an amazing job over the last couple of years by updating the brand across all of our marketing materials. Most of our stores have been revamped too.

<img src="{{ site.cdn_url }}/images/case-studies/majestic/majestic-design.jpg" />

Naturally, we wanted to make sure the new website follows the same guidelines. In fact, we wanted to offer our customers the same great experience online as they have in store.

### Design Approach

We spent some time in stores talking to the staff and customers — we wanted to understand what they love about Majestic.

Next, we carefully reviewed Majestic brand guides and went through all brochures, direct mail, email designs etc. to identify any design patterns that we could reuse online.

Our deadlines were tight. We couldn't afford to spend a lot of time designing one page and revising it over and over again until it's perfect — we took a different approach instead. We asked ourselves what's the minimum we need to deliver to get some feedback? So we started with some base styles like buttons, form elements, typography, and we asked for feedback as soon as we had something to show.

<img src="{{ site.cdn_url }}/images/case-studies/majestic/majestic-style-guide.jpg" />

Once we had the base style signed off we could move onto slightly bigger components like the header, footer, carousel etc. The more components we had the quicker it was to design new ones as the patterns started to repeat.

This constant feedback loop ensured we were on the right track all of the time.

### Tools

Our choice for the design tool was [Sketch](https://www.sketchapp.com/) — layer styles and symbol features worked really well with our component-based approach. It was a no-brainer.

We had to find a way to share our designs and capture feedback quickly — it's a busy environment and getting all stakeholders in one room wasn't always feasible. We decided to give [Invision App](https://www.invisionapp.com/) a go and it worked perfectly.

Once the final designs were signed off we then exported them to [Zeplin](https://zeplin.io/), so that developers knew exactly what colours, fonts and spacing to use.

Development Preparation
-----------------------

We looked at various ways to do this project — we had to be very efficient due to tight deadlines but at the same time we didn't want to compromise on the quality too much.

Given our modular design approach we decided to go with [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) and it was a great choice.

We carefully analysed all the designs to look for patterns so that we didn't have to build that same component twice. Once we had that, we were ready to set up our development environment.

Our priority was to separate back-end and front-end so that we could work independently, at least in the beginning of the project, so we decided to create a dedicated repository for the UI components.

We wanted to keep the front-end clean and simple but at the same time we had to be efficient. We were reluctant to use big frameworks for this project as it would have been an overkill so we only included third-party that we absolutely had to have.

### Development Environment

We needed a way to manage and document dozens of components so we looked for a reliable pattern library.

After reviewing various design systems we decided to go with [Fractal](https://fractal.build/) — not only it's a neat little tool for managing your design patterns but it's also highly customisable and with [browsersync](https://browsersync.io/) built-in it's also a great development tool.

### CSS

Our objective was to build a CSS framework and so we needed a solid structure in place. We didn't want to go with third-parties simply because none of the available frameworks at that time were suitable for our project.

We went with a slightly modified version of an excellent [Inverted Triangle architecture](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) (ITCSS) by Harry Roberts. This relatively simple solution helped us keep the code base tidy.

[SASS](http://sass-lang.com/) was an obvious choice for us and it plays well with ITCSS. We also implemented [PostCSS](http://postcss.org/) to add vendor prefixes so we didn't have to worry about it.

Lastly, to make sure our code base was clean we enforced our guidelines with [stylelint](https://stylelint.io/).

### JavaScript

As I mentioned previously, we wanted to keep things simple and avoid third-party dependencies where possible. That said, we believed that the syntactic sugar changes introduced by ES2015 would help us keep the code clean so we decided to introduce [Babel](https://babeljs.io/) to our build process.

With the latest JavaScript in place we naturally wanted to use ES6 modules — webpack handled it nicely for us, although setting it up took more time than we initially anticipated!

This project wasn't heavy on JavaScript, however, we wrote tests for all (\*cough\* some \*cough\*) modules and we used [Ava](https://github.com/avajs/ava) as our test runner.

To keep everything consistent we followed [airbnb style guide](https://github.com/airbnb/javascript) which we enforced with [eslint](https://eslint.org/).

To glue it all together we used npm scripts — very simple and elegant solution for managing your build tasks.

Development Team
----------------

Back-end development and front-end integration was handled by the excellent team at Naked Wines and we were responsible for the UX, UI and front-end build.

Given the amount of work we had to do and an ambitious deadline we had to find extra resources to help us with the front-end development.

_Recruitment was tough_. Firstly, the location — Majestic Wine Support Centre is based in Watford and finding someone local was a struggle to say the least.

The biggest challenge was finding 3 senior front-end developers who could start working on the project pretty much from day one.

We had to act quickly so our recruitment process was pretty straightforward:

1.  **CV review** — we received a lot of CVs and picked developers that already had some experience with similar projects.
2.  **Technical test** — we then asked them to complete a technical test. The main purpose was, of course, to see their technical knowledge but also to check whether they can stick to the requirements.
3.  **Interview** — if they succeeded we scheduled a quick telephone call followed by a face-to-face interview.

Within the 3 weeks we reviewed dozens of resumés and we asked over 30 people to complete the technical test. After a couple of face-to-face interviews we managed to offer the role to 3 excellent front-end developers.

Project Kick-off
----------------

Just before our first sprint we all went to Norwich to meet the Naked Wines team and plan how we're going to work together.

The fact that back-end and front-end teams were in two different offices meant that good communication was the key.

We agreed to go with 6 sprints, 2 weeks each and we gave ourselves an extra week after the last sprint for final touches.

Development
-----------

Over the next 12 weeks the teams worked really hard to make sure everything was done on time, that means sometimes we had to make compromises on the quality.

There was absolutely no flexibility on the release date. If it wasn't done on time then we'd have to postpone the release to next year — we couldn't risk going into Christmas, our busiest period, with a buggy website.

### Release

We had _many_ challenges to overcome but I'm pleased to say we made it — we released the new site on time and it performed really well over Christmas.

It's also worth mentioning that we received a lot of positive comments from our customers — they loved the new site.

<img src="{{ site.cdn_url }}/images/case-studies/majestic/majestic-plp-preview.jpg" />

### What's Next?

As I mentioned before, we had to compromise on quality in some areas of the site in order to get it ready for the release so there's definitely a room for improvement. That said, we _built, tested and released_ a massive e-commerce project pretty much from scratch in just couple of months — that's a hell of an achievement.

Besides, this project was a simple lift-and-shift — technically it's the same website, just (much) faster and consistent with our branding, however, with this new platform in place Majestic can give its customers much better online experience. Definitely keep an eye on it!

Retrospective
-------------

This is possibly the most exciting and challenging project I have worked on to date — it took us months of hard work but I'm pleased to say it paid off.

**What worked well?**

* **Planning** &mdash; this project was extremely well planned and organised, it really felt like everyone was on the same page.
* **Design and development** &mdash; component-based approach helped us reuse the same patterns across different pages and features resulting in reduced development time and much cleaner code. Eventually, the back-end team was able to build and integrate new pages using our CSS framework without much support from my team.

**What wasn't so good?**

* **Communication** &mdash; front-end and back-end teams were based in two different offices and I don't think the teams had enough time to get to know each other properly which lead to miscommunication at times.
* **Missing designs** &mdash; we designed all the core journeys and had them signed off before the first sprint started, however, we still had a lot more pages to design which occupied most of my time during the first couple of sprints and I couldn't support my team as much as I would like to.

Yes, we had some problems along the way, but this was normal for any project of this scale. I really enjoyed working with Majestic and Naked Wines &mdash; it was an amazing experience for me, I met some great people and learnt a lot.

Lastly, I encourage you to visit [Majestic](https://www.majestic.co.uk/) online and in store, and definitely check out [Naked Wines](https://www.nakedwines.com/) — both companies offer an amazing range of products and a unique experience of buying wine.