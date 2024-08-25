---
title: 'Street Side Software'
layout: splash
# classes:
#     - landing
#     - dark-theme
permalink: /
header:
    overlay_color: '#000'
    overlay_filter: '0.5'
    overlay_image: /assets/images/late-afternoon.jpg
    # overlay_image: /assets/images/sunrise.jpg
    # actions:
    #     - label: 'Download'
    #       url: '#test-link'
excerpt: 'Making life easier for software developers around the world.'
intro:
    - excerpt: Creating Open Source Software used by more than 100,000 software professionals daily!
feature_row:
    - image_path: assets/images/stairs.jpg
      title: 'CSpell'
      excerpt: 'A command line spell checker for code. Perfect for your CI/CD pipeline.'
      url: 'https://cspell.org/'
      btn_label: 'Read More'
      btn_class: 'btn--primary'
    - image_path: assets/images/cafe.jpg
      title: 'VS Code Spell Checker'
      excerpt: 'A popular VS Code extension with over 3 million installs. It improves productivity by spell checking as you type.'
      url: 'https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker'
      btn_label: 'Visual Studio Marketplace'
      btn_class: 'btn--primary'
    - image_path: assets/images/books.jpg
      title: 'VS Code Extensions'
      excerpt: 'Language Dictionaries and other useful extensions for VS Code.'
      url: 'https://marketplace.visualstudio.com/publishers/streetsidesoftware'
      btn_label: 'Visual Studio Marketplace'
      btn_class: 'btn--primary'
---

{% include feature_row id="intro" type="center" %}

{% include feature_row %}
