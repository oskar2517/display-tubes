---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
slug: {{ replace .TranslationBaseName "_" "-" | urlize }}
description: null
date: {{ .Date }}
type: {{ .Type }}
draft: true
hasSecondFeature: false
menu: main
categories:
- General
tags:
-
series:
-
---
